import { ubpt } from "./strategies"

describe("strategies.ubpt", () => {
  test("collect #1", () => {
    document.body.innerHTML = "<h1>じゅげむじゅげむ：良かった点・タイトル</h1>"
    let h1 = document.querySelector("h1")!
    let viewpoint = ubpt(h1)
    expect(viewpoint).toEqual({
      title: "じゅげむじゅげむ",
      el: h1,
      blank: "unknown",
    })

    // Ignore tailing spaces
    document.body.innerHTML = "<h1>じゅげむじゅげむ：良かった点・タイトル </h1>"
    h1 = document.querySelector("h1")!
    viewpoint = ubpt(h1)
    expect(viewpoint).toEqual({
      title: "じゅげむじゅげむ",
      el: h1,
      blank: "unknown",
    })
  })

  test("collect #2", () => {
    document.body.innerHTML = "<h1>2023 2Q</h1>"
    const h1 = document.querySelector("h1")!
    const viewpoint = ubpt(h1)
    expect(viewpoint).toEqual({ title: "2023 2Q", el: h1, blank: "unknown" })
  })

  test("ignore #1", () => {
    document.body.innerHTML = "<h1>じゅげむじゅげむ：伸び代な点</h1>"
    let h1 = document.querySelector("h1")!
    let viewpoint = ubpt(h1)
    expect(viewpoint).toEqual(null)

    // Ignore tailing spaces
    document.body.innerHTML = "<h1>じゅげむじゅげむ：伸び代な点 </h1>"
    h1 = document.querySelector("h1")!
    viewpoint = ubpt(h1)
    expect(viewpoint).toEqual(null)
  })

  test("ignore #2", () => {
    document.body.innerHTML = "<h1>2023 2Qの進め方</h1>"
    const h1 = document.querySelector("h1")!
    const viewpoint = ubpt(h1)
    expect(viewpoint).toEqual(null)
  })
})
