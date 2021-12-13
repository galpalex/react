import React from "react";
import faker from "faker";
import Card from "./4.2";

const Main = () => {
  return (
    <div>
      <Card
        avatar="https://picsum.photos/seed/picsum/200/300"
        title={faker.lorem.word()}
        description={faker.lorem.words()}
        linkShare={faker.internet.url()}
        linkExplore={faker.internet.url()}
      />
      <Card
        avatar={faker.image.imageUrl()}
        title={faker.lorem.word()}
        description={faker.lorem.words()}
        linkShare={faker.internet.url()}
        linkExplore={faker.internet.url()}
      />
      <Card
        avatar="https://picsum.photos/200/300?grayscale"
        title={faker.lorem.word()}
        description={faker.lorem.words()}
        linkShare={faker.internet.url()}
        linkExplore={faker.internet.url()}
      />
    </div>
  );
};

export default Main;
