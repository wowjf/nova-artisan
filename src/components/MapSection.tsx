export function MapSection() {
  return (
    <section className="flex w-full flex-col items-center">
      <img
        src="/arrows/on-right-arrow.png"
        alt=""
        aria-hidden="true"
        width={1440}
        height={1158}
        className="mb-[10px] h-[clamp(4rem,10vh,7rem)] w-auto"
        style={{ transform: 'rotate(90deg)' }}
      />

      <div className="h-[45vh] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d189.13818290325258!2d36.56771181795871!3d40.66932126066707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1789939511130!5m2!1str!2str"
          title="Nova Artisan konum haritası"
          className="size-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
