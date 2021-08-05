import { mount } from "@cypress/vue";

import "../../../../src/index.css";
import Button from "../../../../src/components/base/Button.vue";

describe("Button.vue", () => {
    it("renders", () => {
        mount(Button, {
            props: {
                color: "green",
            },
            slots: {
                default: "Button"
            }
        });
    });
});