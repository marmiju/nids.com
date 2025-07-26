// components/SpeechComponent.tsx
import Image from 'next/image';

interface SpeechProps {
  name: string;
  title: string;
  speech: string;
  imageUrl: string;
}

export default function Speech({
  name,
  title,
  speech,
  imageUrl,
}: SpeechProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 transition-all duration-300">
      <div className="flex-shrink-0 ">
        <Image
          src={imageUrl || "https://i.ibb.co/39611DCX/chairman.jpg"}
          alt={name}
          width={120}
          height={120}
          className="rounded w-64 object-cover"
        />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500 mb-4">{title}</p>
        <p className="text-gray-700 text-base leading-relaxed">{speech}</p>
      </div>
    </div>
  );
}
