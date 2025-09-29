
import { FC } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Activities: FC = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 relative">
        <h1 className="text-5xl font-bold text-center mb-12 text-blue-900">Saturday activities</h1>
        <img src="https://i.imgur.com/BONFg6m.png" alt="Avila" className="w-4/5 h-auto object-cover mb-12 ml-auto"/>
        <div className="flex">
          <div className="w-1/4 pr-8 relative">
            <div className="border-l-4 border-blue-500 absolute h-full top-0 left-2"></div>
            <div className="sticky top-1/2 -translate-y-1/2">
              <div className="mb-96 flex items-center">
                <div className="bg-blue-500 w-4 h-4 rounded-full z-10"></div>
                <p className="ml-4 text-lg font-semibold">13:00</p>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500 w-4 h-4 rounded-full z-10"></div>
                <p className="ml-4 text-lg font-semibold">19:00</p>
              </div>
            </div>
          </div>
          <div className="w-3/4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-3xl font-bold">13:00 - Walking and Eating Tour</AccordionTrigger>
                <AccordionContent>
                  <Card className="overflow-hidden shadow-lg">
                    <img src="https://i.imgur.com/41p9IdE.jpeg" alt="Walking and Eating Tour" className="w-full h-64 object-cover"/>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold">Walking and Eating Tour</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mt-2">Discover the secrets of Avila with a free tour hosted by local expert Jose Angel. A journey through history, culture, and flavor.</p>
                      <Button className="mt-6 w-full bg-blue-500 hover:bg-blue-600">Sign Up</Button>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="mt-8">
              <h2 className="text-3xl font-bold mb-4">19:00 - Evening Activities</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-2-1">
                  <AccordionTrigger className="text-xl font-bold">Paint and Wine Workshop</AccordionTrigger>
                  <AccordionContent>
                    <Card className="overflow-hidden shadow-lg">
                      <img src="https://i.imgur.com/AZfcmqR.jpeg" alt="Paint and Wine Workshop" className="w-full h-64 object-cover"/>
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold">Paint and Wine Workshop</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mt-2">Unleash your inner artist with renowned local artist Ivan Gomez. Enjoy a glass of wine while creating your own masterpiece.</p>
                        <Button className="mt-6 w-full bg-blue-500 hover:bg-blue-600">Sign Up</Button>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2-2">
                  <AccordionTrigger className="text-xl font-bold">Petanca Match</AccordionTrigger>
                  <AccordionContent>
                    <Card className="overflow-hidden shadow-lg">
                      <img src="https://i.imgur.com/oeXSckw.jpeg" alt="Petanca Match" className="w-full h-64 object-cover"/>
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold">Petanca Match</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mt-2">Join a friendly petanca match arranged by Javier Jimenez. A game of skill, strategy, and fun for everyone.</p>
                        <Button className="mt-6 w-full bg-blue-500 hover:bg-blue-600">Sign Up</Button>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
