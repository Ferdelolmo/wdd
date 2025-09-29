
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Activities: FC = () => {
  const activities = [
    {
      time: "13:00",
      title: "Walking and Eating Tour",
      description: "Discover the secrets of Avila with a free tour hosted by local expert Jose Angel. A journey through history, culture, and flavor.",
      image: "/placeholder.svg",
      alt: "Walking and Eating Tour"
    },
    {
      time: "19:00",
      title: "Paint and Wine Workshop",
      description: "Unleash your inner artist with renowned local artist Ivan Gomez. Enjoy a glass of wine while creating your own masterpiece.",
      image: "/placeholder.svg",
      alt: "Paint and Wine Workshop"
    },
    {
      time: "19:00",
      title: "Petanca Match",
      description: "Join a friendly petanca match arranged by Javier Jimenez. A game of skill, strategy, and fun for everyone.",
      image: "/placeholder.svg",
      alt: "Petanca Match"
    }
  ];

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 text-blue-900">June 19th Activities</h1>
        <div className="flex">
          <div className="w-1/4 pr-8">
            <div className="relative">
              <div className="border-l-4 border-blue-500 absolute h-full top-0 left-2"></div>
              <div className="mb-8 flex items-center">
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
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">13:00</h2>
              <Card className="overflow-hidden shadow-lg">
                <img src="/placeholder.svg" alt="Walking and Eating Tour" className="w-full h-64 object-cover"/>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Walking and Eating Tour</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mt-2">Discover the secrets of Avila with a free tour hosted by local expert Jose Angel. A journey through history, culture, and flavor.</p>
                  <Button className="mt-6 w-full bg-blue-500 hover:bg-blue-600">Sign Up</Button>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">19:00</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="overflow-hidden shadow-lg">
                  <img src="/placeholder.svg" alt="Paint and Wine Workshop" className="w-full h-64 object-cover"/>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Paint and Wine Workshop</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mt-2">Unleash your inner artist with renowned local artist Ivan Gomez. Enjoy a glass of wine while creating your own masterpiece.</p>
                    <Button className="mt-6 w-full bg-blue-500 hover:bg-blue-600">Sign Up</Button>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden shadow-lg">
                  <img src="/placeholder.svg" alt="Petanca Match" className="w-full h-64 object-cover"/>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Petanca Match</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mt-2">Join a friendly petanca match arranged by Javier Jimenez. A game of skill, strategy, and fun for everyone.</p>
                    <Button className="mt-6 w-full bg-blue-500 hover:bg-blue-600">Sign Up</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
