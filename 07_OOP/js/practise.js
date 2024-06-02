// class PrintMachine{
//     constructor(fs,cs,ff)
//     {
//         this.fs=fs
//         this.ff=ff
//         this.cs=cs
//     }
//     create(text)
//     {
//         document.write(`<p style="font-size:${this.fs}px; color:${this.cs};font-family:${this.ff};">${text}</p>`)
//     }
// }


// let test = new PrintMachine(14,'blue','monospace')
// test.create("Hello World")



class News {
    constructor(title, text, tags, publicationDate) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.publicationDate = new Date(publicationDate);
    }

    calculateDate() {
        const today = new Date();
        let time_diff = today - this.publicationDate;
        let day_diff = Math.floor(time_diff / (1000 * 60 * 60 * 24));

        if (day_diff < 1) {
            return "today";
        } else if (day_diff < 7) {
            return `${day_diff} days ago`;
        } else {
            let day = this.publicationDate.getDate().toString().padStart(2, '0');
            let month = (this.publicationDate.getMonth() + 1).toString().padStart(2, '0');
            let year = this.publicationDate.getFullYear();
            return `${day}.${month}.${year}`;
        }
    }

    print() {
        const tagsFormatted = this.tags.map(tag => `#${tag}`).join(', ');
        document.write(`
            <div>
                <h1>${this.title}</h1>
                <p>${this.text}</p>
                <p><strong>Tags:</strong> ${tagsFormatted}</p>
                <p><strong>Published:</strong> ${this.calculateDate()}</p>
            </div>
        `);
    }
}

class AllNews{
    constructor()
    {
        this.newArray = []
    }
    get count(){
        return this.newArray.length
    }
    addNews(news)
    {
        this.newArray.push(news)
    }
    removeNews(index) {
        if (index >= 0 && index < this.newsArray.length) {
            this.newsArray.splice(index, 1);
        }
    }
    printNews()
    {
        this.newArray.forEach(news=>news.print())
    }
    sortNews() {
        this.newsArray.sort((a, b) => b.publicationDate - a.publicationDate);
    }

    searchNews(tag) {
        return this.newArray.filter(news => news.tags.includes(tag));
    }
}


let news = new News(
    "What is Lorem?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores recusandae iure neque quisquam debitis.",
    ["lorem", "ipsum"],
    '2024-05-25'
);

let news2 = new News(
    "Breaking News",
    "A major event has occurred in the city today.",
    ["breaking", "event"],
    '2024-05-26'
);

let news3 = new News(
    "Technology Update",
    "New advancements in technology are emerging rapidly.",
    ["technology", "update"],
    '2024-05-20'
);

let allNews = new AllNews()
allNews.addNews(news)
allNews.addNews(news2)
allNews.addNews(news3)

allNews.printNews()