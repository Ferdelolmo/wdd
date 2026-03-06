import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

interface AudioPlayerProps {
  audioSrc: string;
  title: string;
}

const AudioPlayer = ({ audioSrc, title }: AudioPlayerProps) => {
  return (
    <Card className="bg-card/80 backdrop-blur-sm shadow-romantic border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <PlayCircle className="w-5 h-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <audio controls className="w-full">
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </CardContent>
    </Card>
  );
};

export default AudioPlayer;