import { createLocalVue, mount } from "@vue/test-utils";
import VueCompositionApi from "@vue/composition-api";
import ModalSendTransferSuccess from "../../src/components/ModalSendTransferSuccess.vue";

describe("ModalSendTransferSuccess.vue", (): void => {
    const localVue = createLocalVue();
    localVue.use(VueCompositionApi);

    it("renders", (): void => {
        const onChange = jest.fn();

        const wrapper = mount(ModalSendTransferSuccess, {
            localVue,
            propsData: {
                isOpen: false,
                toAccount: "0.0.999",
                amount: "500000"
            },
            listeners: {
                change: onChange
            }
        });

        expect(wrapper).toMatchInlineSnapshot(`
            <div class="modal-send-transfer-success">
              <div role="dialog" aria-modal="true" class="modal-background">
                <div class="modal">
                  <!---->
                  <div class="main">
                    <div class="content-container">
                      <div class="container"><svg width="200" height="200" viewBox="0 0 24 24" class="large-checkbox">
                          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                        </svg>
                        <div class="title">
                          Success
                        </div>
                        <div class="description">
                          Transferred <strong>500000</strong> hbar to account
                          <strong>0.0.999</strong>.
                        </div> <button type="submit" class="btn outline"><span>Dismiss</span>
                          <!----></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `);
    });
});
