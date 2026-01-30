import Card from "../card/Card";
import { Third_Card_List } from "@/app/assets/data/cardDatas";

const ThirdSection = () => {
  return (
    <>
      <section>
        <h2>Latest Articles</h2>
        <div>
          {Third_Card_List.map((item) => {
            return <Card key={item.id} {...item} variant="image" />;
          })}
        </div>
      </section>
    </>
  );
};

export default ThirdSection;
