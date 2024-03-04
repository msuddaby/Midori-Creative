import SectionHeader from "@/components/Misc/SectionHeader";
import MoviePoster from "@/components/Misc/MoviePoster";
import CardGallery from "./CardGallery";

export default function BestOf() {
  return (
    <section>
      <div className="max-w-[85vw] m-auto flex items-center justify-center mb-28">
        <div className={"w-full"}>
          <SectionHeader title={"The Best of Midori"} />
          {/* <div className={"flex justify-center flex-col lg:flex-row items-center gap-6"}>
                  <MoviePoster title={"Origins"} img={"/origins.jpg"} />
                  <MoviePoster title={"Kino Der Toten"} img={"/kino.jpg"} />
                  <MoviePoster title={"Origins"} img={"/origins.jpg"} />
              </div> */}
        </div>
      </div>
      <div className="h-[100vh]">
        <CardGallery />
      </div>
    </section>
  );
}
