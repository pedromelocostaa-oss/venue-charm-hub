import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

export default function ZoomableImage({
  src,
  alt,
  className = "",
  imgClassName = "w-full h-full object-cover",
}: ZoomableImageProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={
            "group relative block overflow-hidden cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-offset-2 " +
            className
          }
          aria-label={`Ampliar imagem: ${alt}`}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={imgClassName + " transition-transform duration-500 group-hover:scale-105"}
          />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-[95vw] p-2 sm:p-4 bg-background border-none">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto max-h-[88vh] object-contain rounded-md"
        />
      </DialogContent>
    </Dialog>
  );
}
