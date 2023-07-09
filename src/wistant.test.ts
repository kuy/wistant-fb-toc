import { findEntryPoint } from "./wistant"

describe("wistant.findEntryPoint", () => {
  test("#1", () => {
    document.body.innerHTML = SNIPPET
    const entry = findEntryPoint()
    expect(entry).not.toBeNull()
    expect(entry?.getAttribute("class")).toEqual("sc-qQLmQ gGVzbe")
  })
})

// 2023/07/10 at wistant
const SNIPPET = `
<div class="sc-pkfsj eoHtUV">
  <div class="sc-qQLmQ gGVzbe">
    <div class="sc-pbzxR jQhgzY">
      <div>
        <div class="sc-fzokOt dUFlnC"><h1 class="sc-AxhUy eToluy">2023 2Q</h1></div>
        <div class="sc-fzokOt lalSEx">
          <div class="sc-fzokOt iPdXUO"><p color="text-02" class="sc-AxjAm jJKrKk">Yamada Taroさんの目標</p></div>
          <div class="sc-fzokOt dUFlnC">
            <div>
              <div data-rbd-draggable-context-id="0" data-rbd-draggable-id="41295" class="sc-pkfPC cEjhYt">
                <div class="sc-pbJYR ezUOx">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  </svg>
                </div>
                <div class="sc-fznyAO kWnDEX">
                  <div class="sc-fznWqX dAkvW">
                    <div class="sc-fznJRM jibgdu">
                      <div class="sc-fznxsB drBBRM">
                        <div class="sc-fzpjYC LhAoJ">
                          <div class="sc-fzoXzr dNeSav">
                            <div class="sc-fzoLag cVvwor">
                              <div class="sc-fzpdyU dnrKJF">
                                <div class="sc-fzqBZW gFSA-dM">
                                  <div class="sc-pDboM deGaYK">
                                    <div class="sc-qbELi huUXnf">
                                      <div class="sc-pcZmk bKpYNX">
                                        <p>79<small>%</small></p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="sc-fzokOt eNyVXt">
                                    <div class="sc-fzokOt iPdXUO">
                                      <div class="sc-fzqBZW cpMxPA">
                                        <div size="16" fill="#50D2C2" class="sc-psDhf jUMyYw">
                                          <svg width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                          </svg>
                                        </div>
                                        <p color="text-01" class="sc-AxjAm gNWOtN">本を4冊読む</p>
                                      </div>
                                    </div>
                                    <div class="sc-fzokOt dUFlnC">
                                      <ul class="sc-qYUWV hqXLGW">
                                        <li class="sc-qQxFs jdLQbH">
                                          <div class="sc-pJipy mZVAk preventParentClick">
                                            <div class="sc-pBlxj gYSgcm">
                                              <div width="16px" class="sc-fzqNJr botshc">
                                                <div class="sc-oUDcU cnVYtu">
                                                  <div class="sc-pXZzD ivUHTG">
                                                    <div class="sc-pQdCa eISBAy" style="min-width: 16px; width: 16px; height: 16px; background-color: rgb(255, 255, 255);">
                                                      <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <p color="text-02" overflow="ellipsis" class="sc-AxjAm dgpmZx">Yamada Taro</p>
                                          </div>
                                        </li>
                                        <li class="sc-qQxFs jdLQbH">
                                          <p color="text-02" overflow="ellipsis" class="sc-AxjAm dgpmZx">
                                            <svg width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            </svg>
                                            <span>0</span>
                                          </p>
                                        </li>
                                        <li class="sc-qQxFs jdLQbH">
                                          <p color="text-02" overflow="ellipsis" class="sc-AxjAm dgpmZx">
                                            <svg width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            </svg>
                                            <span>19日前</span>
                                          </p>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="sc-fzpdyU iGvhDA">
                                <div class="sc-fzokOt eNyVXt">
                                  <div class="sc-fzokOt iPdXUO">
                                    <div class="sc-fzqBZW cpMxPA">
                                      <div size="16" fill="#50D2C2" class="sc-psDhf jUMyYw">
                                        <svg width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        </svg>
                                      </div>
                                      <p color="text-01" class="sc-AxjAm gNWOtN">本を4冊読む</p>
                                    </div>
                                  </div>
                                  <div class="sc-fzokOt dUFlnC">
                                    <ul class="sc-qYUWV hqXLGW">
                                      <li class="sc-qQxFs jdLQbH">
                                        <div class="sc-pJipy mZVAk preventParentClick">
                                          <div class="sc-pBlxj gYSgcm">
                                            <div width="16px" class="sc-fzqNJr botshc">
                                              <div class="sc-oUDcU cnVYtu">
                                                <div class="sc-pXZzD ivUHTG">
                                                  <div class="sc-pQdCa eISBAy" style="min-width: 16px; width: 16px; height: 16px; background-color: rgb(255, 255, 255);">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    </svg>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <p color="text-02" overflow="ellipsis" class="sc-AxjAm dgpmZx">Yamada Taro</p>
                                        </div>
                                      </li>
                                      <li class="sc-qQxFs jdLQbH">
                                        <p color="text-02" overflow="ellipsis" class="sc-AxjAm dgpmZx">
                                          <svg width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                          </svg>
                                          <span>0</span>
                                        </p>
                                      </li>
                                      <li class="sc-qQxFs jdLQbH">
                                        <p color="text-02" overflow="ellipsis" class="sc-AxjAm dgpmZx">
                                          <svg width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                          </svg>
                                          <span>19日前</span>
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="sc-fzoLag cdZnVe sc-qcrOD lgHeMB">
                              <div class="sc-fzqBZW dDlKFn">
                                <div width="32px" class="sc-fzqNJr htXUep">
                                  <div width="20px" class="sc-fzqNJr cLESwt">
                                    <div class="sc-oUDcU cnVYtu">
                                      <div class="sc-pXZzD ivUHTG">
                                        <div class="sc-pQdCa eISBAy" style="min-width: 20px; width: 20px; height: 20px; background-color: rgb(255, 255, 255);">
                                          <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="sc-fzqBZW ceqNZn">
                                  <div width="24px" class="sc-fzqNJr jfbgZJ"><div class="sc-pdMpF eXVJvn"></div></div>
                                  <div class="sc-qapxP jnVPKq">
                                    <div class="sc-fzoiQi bkUEiK">
                                      <div class="sc-fzoNJl egMSpa"><div class="sc-fzoXWK euXMWQ" style="width: 79%;"></div></div>
                                    </div>
                                    <div class="sc-oTmHo fcqzIr"><p color="text-01" overflow="ellipsis" class="sc-AxjAm kTDDBN">79%</p></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

`
