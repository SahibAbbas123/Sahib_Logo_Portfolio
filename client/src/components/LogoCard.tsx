import Image from "next/image";

type Props = {
  src: string;   // /logos/*.svg|png
  title: string; // Brand name
  meta?: string; // Year · Role
};

export default function LogoCard({ src, title, meta }: Props) {
  return (
    <figure className="card card-hover p-5">
      <div className="relative aspect-square w-full rounded-xl flex items-center justify-center hairline bg-zinc-50">
        <Image src={src} alt={title} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-contain p-8" />
      </div>
      <figcaption className="mt-4">
        <div className="flex items-center justify-between">
          <span className="font-medium">{title}</span>
          <span className="text-[11px] px-2 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 text-blue-700">Logo</span>
        </div>
        {meta && <p className="muted mt-1 text-sm">{meta}</p>}
      </figcaption>
    </figure>
  );
}