const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
};
const api = "https://api.vevioz.com/api/button/mp3/";

export default function Youtube(id: string) {
  const array = [];
  return new Promise((resolve, reject) => {
    fetch(`${api}${id}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        origin: "https://yt1s.io",
      },
    })
      .then((res) => {
        res.text().then((result) => {
          var arrMatch = null;
          var rePattern = new RegExp('<a href="(.*?)">', "gi");
          while ((arrMatch = rePattern.exec(result))) {
            arrMatch[1] && array.push(arrMatch[1]);
          }
          const link =
            array.filter((item) => item.includes("mp3/320/"))[0] ||
            array.filter((item) => item.includes("mp3/256/"))[0] ||
            null;
          if (link) {
            resolve(link);
            return;
          } else {
            reject("");
          }
        });
      })
      .catch((err) => {
        reject("");
      });
  });
}
