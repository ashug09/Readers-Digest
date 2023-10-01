"use client";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { Card, Image, Text, Group, Button, Grid } from "@mantine/core";
import classes from "./card.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Demo } from "../loader/loader";
export function BadgeCard() {
  useEffect(() => {
    const apikey = process.env.NEXT_PUBLIC_API_KEY; //temp mail vali api key
    const lang = sessionStorage.getItem("language");
    const languageName = sessionStorage.getItem("languageName");
    setLang(languageName);
    const category = sessionStorage.getItem("category");
    setCategory(category);
    axios
      .get(
        // "https://fakestoreapi.com/products"
        "https://newsdata.io/api/1/news?apikey=" +
          apikey +
          "&image=1&language=" +
          `${lang === null ? "en" : lang}` +
          "&category=" +
          `${category === null ? "top" : category}`
      )
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const { push } = useRouter();
  const [data, setData] = useState(null);
  const [category, setCategory] = useState(null);
  const [lang, setLang] = useState(null);

  return (
    <>
      {data === null ? (
        <Demo />
      ) : (
        <>
          <Text fz="lg" fw={500} mt="md" mb="sm" ml="md">
            {category === null ? "Top" : category} News
            {lang === null ? " in English" : " in " + lang}
          </Text>
          <Grid>
            {data?.map((item) => (
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={item.article_id}>
                <Card
                  withBorder
                  radius="md"
                  p="md"
                  className={classes.card}
                  key={item.article_id}
                >
                  <div>
                    <Card.Section>
                      <Image
                        style={{ objectFit: "contain" }}
                        src={item?.image_url}
                        alt={item?.title}
                        height={180}
                      />
                    </Card.Section>

                    <Card.Section className={classes.section} mt="md">
                      <Group justify="apart">
                        <Text fz="lg" fw={500}>
                          {item?.title.slice(0, 30)}...
                        </Text>
                      </Group>
                      <Text fz="sm" mt="xs">
                        {item?.description?.slice(0, 100)}...
                      </Text>
                    </Card.Section>

                    <Group mt="xs" className={classes.group}>
                      <Button
                        radius="md"
                        onClick={() => push(item.link)}
                        style={{ flex: 1 }}
                      >
                        Show details
                      </Button>

                      {/* liked news would work when we have a custom backend */}
                      {/* <ActionIcon
                        onClick={() => {
                          handleLike(item.article_id);
                        }}
                        variant="default"
                        radius="md"
                        size={36}
                      >
                        {liked === false ? (
                          <IconHeart className={classes.like} stroke={1.5} />
                        ) : (
                          <IconHeartFilled
                            className={classes.like}
                            stroke={1.5}
                          />
                        )}
                      </ActionIcon> */}
                    </Group>
                  </div>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </>
      )}
    </>
  );
}
