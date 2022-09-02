import { describe, expect, test, beforeEach, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import Card from "@/components/Card.vue";

describe("Card", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Card);
  });
  afterEach(() => wrapper.unmount());

  test("only name field exists", async () => {
    await wrapper.setProps({
      card: {
        name: "JoJo",
      },
    });
    expect(wrapper.findAll("p").length).toBe(1);
    expect(wrapper.findAll("p")[0].text()).toBe("Name: JoJo");
  });

  test("name field does not exist", async () => {
    await wrapper.setProps({
      card: {
        age: "100",
        stand: "The World",
      },
    });
    expect(wrapper.findAll("p").length).toBe(3);
    expect(wrapper.findAll("p")[0].text()).toBe("Name: DIO");
    expect(wrapper.findAll("p")[1].text()).toBe("Age: 100");
    expect(wrapper.findAll("p")[2].text()).toBe("Stand: The World");
  });
});
