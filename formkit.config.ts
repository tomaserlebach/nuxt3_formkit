import { DefaultConfigOptions, createInput } from "@formkit/vue";
import Test from "~/custom_form_types/test.vue";

const config: DefaultConfigOptions = {
  inputs: {
    test: createInput(Test)
  },
};

export default config;
