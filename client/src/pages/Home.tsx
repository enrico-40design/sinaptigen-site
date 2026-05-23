import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap, Heart, Shield, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-border z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-primary">Synaptigen24</span>
          </div>
          <div className="text-sm text-muted-foreground">Análise de Marketing</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium">
                ✨ Análise de Engenharia Reversa
              </div>
              <h1 className="text-foreground leading-tight">
                Memória Afiada em Qualquer Idade
              </h1>
              <p className="text-lg text-muted-foreground">
                Descubra os segredos de marketing por trás do Synaptigen24. Uma análise completa de dores, desejos, emoções e estratégias criativas que convertem clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-blue-800 text-white"
                  onClick={() => document.getElementById("analysis")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver Análise Completa
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.open("https://synaptigen24.com/text.php", "_blank")}
                >
                  Ir para Synaptigen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative h-80 md:h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl opacity-50"></div>
              <div className="relative z-10 flex flex-col items-center gap-4">
                <Brain className="w-24 h-24 text-primary opacity-80" />
                <div className="text-center space-y-2">
                  <p className="text-sm font-semibold text-primary">Neurônios Conectados</p>
                  <p className="text-xs text-muted-foreground">Comunicação Otimizada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Analysis Section */}
      <section id="analysis" className="py-20 px-4 md:px-8 bg-muted/30">
        <div className="container max-w-6xl">
          <h2 className="text-center mb-16 text-foreground">Elementos de Marketing Identificados</h2>

          {/* Grid of Insights */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Dores */}
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Dores (Pains)</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Esquecimento e perda de memória recente</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>"Brain fog" e dificuldade de concentração</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Medo do declínio cognitivo associado à idade</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Lentidão no raciocínio e aprendizado</span>
                </li>
              </ul>
            </div>

            {/* Desejos */}
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-secondary" />
                <h3 className="text-xl font-bold text-foreground">Desejos (Desires)</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Manter memória saudável até a velhice</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Clareza mental e foco aguçado</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Agilidade mental sustentada</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Aprender mais rápido e lembrar sem esforço</span>
                </li>
              </ul>
            </div>

            {/* Emoções */}
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Emoções (Emotions)</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Medo:</strong> De perder independência e memórias</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Esperança:</strong> Solução natural e simples existe</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Segurança:</strong> Garantia de 180 dias</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Alívio:</strong> Causa raiz identificada e solucionável</span>
                </li>
              </ul>
            </div>

            {/* Público-Alvo */}
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Público-Alvo</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Primário:</strong> Homens/mulheres 50+ preocupados com saúde cerebral</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Secundário:</strong> Profissionais de alta performance</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Buscam vantagem cognitiva e clareza mental</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Promises */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-12 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-bold text-foreground mb-6">Promessas Centrais</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Memória Saudável</h4>
                  <p className="text-sm text-muted-foreground">Suporte a uma memória saudável na velhice</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Clareza Mental</h4>
                  <p className="text-sm text-muted-foreground">Foco imediato e clareza mental</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Limpeza Neural</h4>
                  <p className="text-sm text-muted-foreground">Limpeza do acúmulo de açúcar nos neurônios</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Garantia Total</h4>
                  <p className="text-sm text-muted-foreground">180 dias de garantia ou dinheiro de volta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Angles Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container max-w-6xl">
          <h2 className="text-center mb-16 text-foreground">5 Ângulos Criativos de Meta Ads</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "O Segredo da Longevidade Mental", desc: "Idade não precisa significar declínio cognitivo" },
              { title: "Desvendando o Nevoeiro Mental", desc: "Restaurar clareza mental e produtividade" },
              { title: "A Revolução dos Probióticos", desc: "Abordagem inovadora para saúde cerebral" },
              { title: "Memória Afiada em 180 Dias", desc: "Garantia de satisfação e remoção de risco" },
              { title: "O Açúcar é o Vilão", desc: "Causa raiz do declínio cognitivo revelada" },
            ].map((angle, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">{i + 1}</span>
                  </div>
                  <h4 className="font-semibold text-foreground">{angle.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{angle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container max-w-4xl text-center">
          <h2 className="mb-6 text-foreground">Pronto para Converter Mais Clientes?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Acesse a página completa do Synaptigen24 e aplique os insights de marketing descobertos nesta análise.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-orange-600 text-white animate-pulse"
            onClick={() => window.open("https://synaptigen24.com/text.php", "_blank")}
          >
            Ir para Synaptigen24
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <p className="text-xs text-muted-foreground mt-6">
            Clique para acessar a página do produtor e ver a presell em ação
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 md:px-8">
        <div className="container max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Synaptigen24 Marketing Dashboard</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Análise de Engenharia Reversa • Estratégias Criativas para Conversão
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
