import Image from "next/image";
import Link from "next/link";

const Bio = () => {
  return (
    <section className=" text-white p-8 w-full" id="bioPage">
      <h1 className="text-6xl p-4">BIO</h1>
      <div className="flex flex-col sm:p-8 md:text-base">
        <p>
          Hazel Miller and the Collective is a highly popular and in-demand band
          in Colorado and beyond. Ms. Miller, an accomplished performer who has
          been playing in Colorado for almost four decades, was honored on the
          floor of the <i>Colorado State Senate</i> in March 2023, and was
          inducted into the <i>Colorado Music Hall of Fame</i> on June 10th,
          2023. She has shared the stage with notable names such as{" "}
          <i>Herbie Hancock</i>, <i>Michael McDonald</i>, <i>Al Green</i>, and{" "}
          <i>Big Head Todd and the Monsters</i>, among others.
        </p>
        <span className="p-3"></span>
        <p>
          Ms. Miller&apos;s voice has been described as &quot;stunning, moving,
          and powerful.&quot; For more than two decades, formally known as{" "}
          <i>The Hazel Miller Band</i>, has been one of the most sought-after
          performers in the state, and in 2020, they renamed to{" "}
          <i>Hazel Miller and the Collective</i>. The band plays an eclectic mix
          of jazz, R&B, blues, and original music that is guaranteed to make the
          audience dance and sing along. They create a truly engaging musical
          experience that excites their listeners.
        </p>
        <span className="p-3"></span>
        <p>
          The band, consisting of Brian Mikulich on drums, Cody Carbone on
          guitar and lead vocals, Coco Brown on lead vocals, Dana Marsh on keys,
          Jeff Nathanson on sax and EWI, and Rich Lamb on bass guitar and
          vocals, has been playing together for over a decade, making them a
          tight-knit and experienced group. They&apos;ve played for private
          events, weddings, nightclubs and in some of the largest venues in the
          state, as well as major local festivals such as{" "}
          <i>Jazz in the Park </i> at City Park, Lakewood Amphitheater&apos;s{" "}
          <i>Summer of Music</i>, and the <i>Botanic Gardens</i>
          in Denver, among others. Their unique blend of jazz, blues, pop, and
          gospel has made them popular with audiences of all ages, and their
          performances are known for their high-energy and lively atmosphere.
          The band has enjoyed many years of playing all over the map, and their
          reputation precedes them as one of the best groups in the state.
        </p>
        <span className="p-3"></span>
        <p>
          In 2015, Ms. Miller performed the national anthem at the inauguration
          of Colorado Governor John Hickenlooper, and later that night, she
          appeared with prominent bands such as the <i>Lumineers</i>,{" "}
          <i>String Cheese Incident</i>, and{" "}
          <i>Big Head Todd and the Monsters</i>. She also performed at the{" "}
          <i>FIS Alpine Ski Championships</i> in Beaver Creek, Colorado, with an
          estimated international television audience of 180,000,000 viewers. In
          addition, Ms. Miller was chosen to record a welcome greeting for
          visitors taking the trains to the main terminal at Denver
          International Airport.
        </p>
        <span className="p-3"></span>
        <p>
          Ms. Miller&apos;s music can be heard on many local radio stations, and
          nationally, Sirius Radio and XM Radio play her music on the{" "}
          <i>Real Jazz</i> and <i>B. B. King&apos;s Blues</i> stations. The band
          has had a long and well-publicized career in Colorado and nationally!
        </p>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button className="btn bg-maroon border-maroon text-white hover:text-maroon hover:bg-white hover:border-white">
          MEET THE BAND
        </button>
      </div>
    </section>
  );
};

export default Bio;
