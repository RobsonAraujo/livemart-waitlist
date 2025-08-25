import { Button } from "~/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Conheça Nossos Fundadores
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Os visionários por trás do LiveMart, combinando experiência em
            design de produtos e inovação tecnológica
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Gustavo Pinheiro */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-8 relative">
                  <div className="relative w-52 h-52 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gray-200 rounded-full opacity-20 blur-lg"></div>
                    <Image
                      src="/gustavo.jpeg"
                      alt="Robson Araujo Carmo"
                      fill
                      className="rounded-full object-cover border-4 border-white shadow-xl"
                    />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-gray-900">
                    Gustavo Pinheiro
                  </h2>
                  <p className="text-lg text-gray-600 font-medium mb-4">
                    Product Designer há 10 anos
                  </p>
                  <Link
                    href="https://www.linkedin.com/in/gpinheiros/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      Conectar no LinkedIn
                    </Button>
                  </Link>
                </div>

                <div className="space-y-4 text-sm leading-relaxed text-gray-700 relative">
                  <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gray-200 rounded-full opacity-50"></div>
                  <p className="pl-4">
                    Product Designer há 10 anos, com experiência em projetos B2B
                    e B2C para startups e empresas tradicionais. Desempenhei
                    papéis cruciais na inovação digital da Rádio Antena 1, na
                    construção do zero da empresa Mobiauto (agora pertencente ao
                    Banco Pan) e no desenvolvimento de produtos na maior empresa
                    de dados da América Latina, a Cortex-Intelligence.
                  </p>

                  <p className="pl-4">
                    <strong>Expertise em:</strong>
                    <br />
                    ✔️ Pesquisas e testes com usuários
                    <br />
                    ✔️ Prototipação e wireframes
                    <br />
                    ✔️ Sistema de design
                    <br />
                    ✔️ Facilitação e workshops (Design sprint, Design thinking,
                    etc)
                    <br />
                    ✔️ Sistemas e plataformas SaaS
                    <br />
                    ✔️ Gerenciamento de equipes e produtos
                    <br />
                    ✔️ Planejamento, priorização e métricas de desempenho
                  </p>

                  <p className="pl-4">
                    <strong>Outras habilidades:</strong>
                    <br />
                    ✔️ Experiência em trabalhar em equipes multidisciplinares e
                    com práticas ágeis
                    <br />
                    ✔️ Proativo e solucionador de problemas (atuei como Product
                    Owner/Manager quando necessário)
                    <br />
                    ✔️ Facilitador, colaborativo e capaz de construir boas
                    relações internas e externas
                    <br />
                    ✔️ Mentor de designers e promotor da cultura de Design no
                    desenvolvimento de produtos digitais
                  </p>

                  <p className="pl-4">
                    Fora do trabalho, sou voluntário na ONG Guri, que oferece
                    acesso a atividades culturais e educacionais para crianças e
                    adolescentes em situação de vulnerabilidade social.
                  </p>
                </div>
              </div>
            </div>

            {/* Robson Araujo Carmo */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-8 relative">
                  <div className="relative w-52 h-52 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gray-200 rounded-full opacity-20 blur-lg"></div>
                    <Image
                      src="/robson.jpeg"
                      alt="Robson Araujo Carmo"
                      fill
                      className="rounded-full object-cover border-4 border-white shadow-xl"
                    />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-gray-900">
                    Robson Araujo Carmo
                  </h2>
                  <p className="text-lg text-gray-600 font-medium mb-4">
                    MBA Candidate em Management Science na Boston University
                  </p>
                  <Link
                    href="https://www.linkedin.com/in/robson-araujo-carmo/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      Conectar no LinkedIn
                    </Button>
                  </Link>
                </div>

                <div className="space-y-4 text-sm leading-relaxed text-gray-700 relative">
                  <div className="absolute -right-2 top-0 bottom-0 w-1 bg-gray-200 rounded-full opacity-50"></div>
                  <p className="pr-4">
                    Robson é um candidato a MBA em Management Science na Boston
                    University Questrom School of Business e um líder
                    tecnológico experiente com mais de oito anos em
                    desenvolvimento web e mobile full-stack.
                  </p>

                  <p className="pr-4">
                    Ele liderou projetos de alto impacto para marcas globais,
                    incluindo Mitsubishi Motors, Mercedes-Benz e Banco PAN,
                    construindo arquiteturas escaláveis e integrando sistemas
                    estratégicos que agora processam milhões de dólares
                    mensalmente.
                  </p>

                  <p className="pr-4">
                    Na Mobiauto, coordenou uma equipe de desenvolvimento de 12
                    membros, gerando milhões de visualizações mensais e
                    melhorando o desempenho SEO. Na Nearsure, desenvolveu
                    arquiteturas web que melhoraram a eficiência do sistema em
                    15% para grandes clientes, além de assessorar estratégias de
                    adoção de tecnologia.
                  </p>

                  <p className="pr-4">
                    Sua expertise abrange JavaScript, TypeScript, React.js,
                    Node.js, SQL, PHP e soluções baseadas em nuvem,
                    complementada por uma forte capacidade de liderar equipes
                    multifuncionais e alinhar tecnologia com objetivos de
                    negócio.
                  </p>

                  <p className="pr-4">
                    Apaixonado por inovação e aprendizado contínuo, Robson
                    prospera em ambientes dinâmicos, combinando domínio técnico
                    com visão estratégica para entregar soluções digitais
                    impactantes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 md:px-10 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Nossa Visão</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Juntos, Gustavo e Robson trazem uma combinação única de experiência
            em design de produtos, liderança tecnológica e visão de negócios
            para criar uma plataforma que revoluciona o comércio online no
            Brasil. Suas experiências diversas em design de produtos, tecnologia
            e desenvolvimento de negócios permitem construir soluções que
            atendem aos desafios reais do mercado de leilões online.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#49be78]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Design de Produtos</h3>
              <p className="text-muted-foreground text-sm">
                Com 10 anos de experiência em design de produtos, nosso
                co-fundador entende profundamente as necessidades dos usuários e
                como criar experiências intuitivas e envolventes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#49be78]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Inovação Tecnológica
              </h3>
              <p className="text-muted-foreground text-sm">
                Combinando anos de liderança tecnológica com práticas modernas
                de desenvolvimento, estamos construindo uma plataforma poderosa
                e fácil de usar para vendedores e compradores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Junte-se à Nossa Missão</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Faça parte de uma plataforma construída por profissionais
            experientes que entendem tanto os desafios de design quanto os
            tecnológicos do comércio online.
          </p>
          <Link href="/">
            <Button
              size="lg"
              className="bg-[#49be78] hover:bg-[#49be78] text-white"
            >
              Entrar na Lista de Espera
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
