
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Activities: FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">June 19th Activities</h1>
        <div className="grid gap-12 md:grid-cols-3">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img src="/placeholder.svg" alt="Walking and Eating Tour" className="w-full h-64 object-cover"/>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Walking and Eating Tour</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold text-gray-700">13:00</p>
              <p className="text-gray-600 mt-2">Discover the secrets of Avila with a free tour hosted by local expert Jose Angel. A journey through history, culture, and flavor.
              </p>
              <Button className="mt-6 w-full">Sign Up</Button>
            </CardContent>
          </Card>
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img src="/placeholder.svg" alt="Paint and Wine Workshop" className="w-full h-64 object-cover"/>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Paint and Wine Workshop</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold text-gray-700">19:00</p>
              <p className="text-gray-600 mt-2">Unleash your inner artist with renowned local artist Ivan Gomez. Enjoy a glass of wine while creating your own masterpiece.
              </p>
              <Button className="mt-6 w-full">Sign Up</Button>
            </CardContent>
          </Card>
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img src="/placeholder.svg" alt="Petanca Match" className="w-full h-64 object-cover"/>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Petanca Match</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold text-gray-700">19:00</p>
              <p className="text-gray-600 mt-2">Join a friendly petanca match arranged by Javier Jimenez. A game of skill, strategy, and fun for everyone.
              </p>
              <Button className="mt-6 w-full">Sign Up</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Activities;
