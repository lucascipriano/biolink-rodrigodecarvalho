import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Github, Instagram, Phone } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
      <Card className="w-full max-w-md mx-4 ">
        <CardContent className="flex flex-col items-center p-6 space-y-3">
          <Image
            src="/rodrigo.jpg"
            alt="Profile Picture"
            width={128}
            height={128}
            className="rounded-full border-4 border-white shadow-lg"
          />
          <div className="flex">
            <h1 className=" text-xl md:text-2xl font-bold text-center mr-2">
              Pai Rodrigo de Carvalho
            </h1>
            <Image src="/twitter.svg" alt="" width={20} height={20} />
          </div>
          <p className="text-center text-gray-600">
            O maior Espiritualista Sensitivo do Brasil - Rio de Janeiro
          </p>

          <div className="w-full space-y-4">
            <Button variant="outline" className="w-full justify-start" asChild>
              <a
                href="https://api.whatsapp.com/send/?phone=5521991072228&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-4 w-4" /> Whatsapp
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a
                href="https://www.instagram.com/pairodrigodecarvalho/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-4 w-4" /> Instagram
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a
                href="https://www.tiktok.com/@pairodrigodecarvalho?_t=8kCvb7rYsru&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/tiktok-logo-4502.svg"
                  alt=""
                  width={19}
                  height={19}
                />{" "}
                <p>Tiktok</p>
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a
                href="https://github.com/seuuser"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a
                href="https://pay.kiwify.com.br/f3ZBDUH"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2"
              >
                <Book className="h-4 w-4 flex-shrink-0" />
                <span className="md:whitespace-normal overflow-hidden break-words ">
                  E-book: O Poder da Fé - Como a Religião Auxilia na Depressão e
                  Transtornos Psicológicos
                </span>
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
