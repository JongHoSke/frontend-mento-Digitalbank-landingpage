import Card from "../card/Card";
import { Third_Card_List } from "@assets/data/cardDatas";

const ThirdSection = () => {
  return (
    <>
      <section className="py-5 px-5 md:px-40 md:py-20 bg-gray-50">
        <h2 className="my-10 md:my-0 text-4xl text-center md:text-left md:mb-10">
          Latest Articles
        </h2>
        <div className="md:grid md:grid-cols-4 md:m-auto">
          {Third_Card_List.map((item) => {
            return <Card key={item.id} {...item} variant="image" />;
          })}
        </div>
      </section>
    </>
  );
};

export default ThirdSection;
