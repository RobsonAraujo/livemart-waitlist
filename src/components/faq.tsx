"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
      <div className="flex flex-col items-center justify-center gap-2 max-w-md">
        <h2 className="sm:text-3xl text-2xl font-semibold text-foreground">
          Perguntas Frequentes
        </h2>
        <p className="sm:text-base text-sm text-muted-foreground text-center">
          Tudo que você precisa saber sobre o LiveMart e nossa plataforma de
          leilões.
        </p>
      </div>
      <div className="w-full max-w-lg">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-4"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline">
              O que é o LiveMart?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              O LiveMart é uma plataforma inovadora de compra e venda com
              leilões online, focada inicialmente em cartas Pokémon. Nossa
              missão é criar um marketplace interativo onde você pode anunciar
              seus produtos, participar de leilões em tempo real e, em breve,
              assistir lives dos vendedores mostrando seus produtos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline">
              Como funcionam os leilões?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Os leilões funcionam de forma simples e transparente. Vendedores
              anunciam seus produtos com preço inicial e tempo de duração.
              Compradores podem dar lances em tempo real, e o maior lance vence
              quando o tempo acabar. Tudo acontece de forma dinâmica e
              competitiva!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline">
              Quais são os benefícios de entrar na lista de espera?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Membros da lista de espera terão acesso antecipado à plataforma,
              benefícios exclusivos para vendedores, taxas reduzidas, acesso à
              comunidade de colecionadores e a oportunidade de dar feedback
              direto sobre as funcionalidades da plataforma.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline">
              Como funciona o sistema de pagamentos?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Na primeira versão (V1), os leilões funcionarão com fotos e
              negociações diretas entre compradores e vendedores. O sistema de
              pagamentos integrado será implementado nas próximas versões,
              garantindo segurança e praticidade para todos os usuários.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="hover:no-underline">
              Posso vender outros produtos além de cartas Pokémon?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Inicialmente vamos focar em cartas Pokémon para criar uma
              comunidade forte e especializada. Mas nossa visão é expandir para
              outros produtos colecionáveis e itens diversos, sempre mantendo a
              qualidade e confiança da plataforma.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="hover:no-underline">
              Quando a plataforma será lançada?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Estamos trabalhando duro para lançar em breve! A primeira versão
              terá o sistema de leilões com fotos. Depois vamos adicionar as
              funcionalidades de lives e pagamentos integrados. Entre na lista
              de espera para ser um dos primeiros a experimentar!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
