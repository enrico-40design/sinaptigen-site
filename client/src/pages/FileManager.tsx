import { useState, useRef } from 'react';
import { useAuth } from '@/_core/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { trpc } from '@/lib/trpc';
import { Upload, Trash2, Download, FileText, Image, Music, File } from 'lucide-react';
import { storagePut } from '../../../server/storage';

export default function FileManager() {
  const { user } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const { data: files = [], isLoading, refetch } = trpc.files.list.useQuery();
  const uploadMutation = trpc.files.upload.useMutation();
  const deleteMutation = trpc.files.delete.useMutation();

  const getFileIcon = (mimeType?: string) => {
    if (!mimeType) return <File className="w-5 h-5" />;
    if (mimeType.startsWith('image/')) return <Image className="w-5 h-5" />;
    if (mimeType.startsWith('audio/')) return <Music className="w-5 h-5" />;
    return <FileText className="w-5 h-5" />;
  };

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return 'Unknown';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.currentTarget.files;
    if (!selectedFiles) return;

    setUploading(true);
    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const fileBuffer = await file.arrayBuffer();
        
        // Upload to S3
        const { key, url } = await storagePut(
          `uploads/${user?.id}/${Date.now()}-${file.name}`,
          new Uint8Array(fileBuffer),
          file.type
        );

        // Save metadata to database
        await uploadMutation.mutateAsync({
          fileName: file.name,
          fileKey: key,
          fileUrl: url,
          mimeType: file.type,
          fileSize: file.size,
        });
      }

      // Refresh file list
      refetch();
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteMutation.mutateAsync({ id });
      refetch();
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">File Manager</h1>
          <p className="text-slate-600">Upload and manage your files securely</p>
        </div>

        {/* Upload Section */}
        <Card className="p-8 mb-8 border-2 border-dashed border-slate-300 hover:border-lime-400 transition-colors">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileSelect}
            disabled={uploading}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="w-full flex flex-col items-center justify-center gap-4 py-12 cursor-pointer"
          >
            <div className="p-4 bg-lime-100 rounded-full">
              <Upload className="w-8 h-8 text-lime-600" />
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-slate-900">
                {uploading ? 'Uploading...' : 'Click to upload or drag files'}
              </p>
              <p className="text-sm text-slate-600">Support for multiple files</p>
            </div>
          </button>
        </Card>

        {/* Files List */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-bold text-slate-900">
              Your Files ({files.length})
            </h2>
          </div>

          {isLoading ? (
            <div className="p-8 text-center text-slate-600">Loading files...</div>
          ) : files.length === 0 ? (
            <div className="p-8 text-center text-slate-600">
              No files uploaded yet. Start by uploading a file above.
            </div>
          ) : (
            <div className="divide-y divide-slate-200">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                      {getFileIcon(file.mimeType)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 truncate">
                        {file.fileName}
                      </p>
                      <p className="text-sm text-slate-600">
                        {formatFileSize(file.fileSize)} • Uploaded{' '}
                        {new Date(file.uploadedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={file.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                      title="Download"
                    >
                      <Download className="w-5 h-5 text-slate-600" />
                    </a>
                    <button
                      onClick={() => handleDelete(file.id)}
                      disabled={deleteMutation.isPending}
                      className="p-2 hover:bg-red-100 rounded-lg transition-colors text-red-600"
                      title="Delete"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
