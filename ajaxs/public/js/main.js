const getList = async () => {
    const { data } = await axios.get('/artic/list')
    console.log(data);

    const articleList = data.result.list;
    articleList

    let html = ``;
    for ( const item of articleList) {
        html = `${html}<button data-id = "${item.id}" type = "button">${item.title}</div>`;
    }

    const rootEl = document.querySelector('.root');
    rootEl.innerHTML = html;
}

getList();

