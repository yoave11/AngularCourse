app.value('postsService', {
    data: {
        posts: [],
        post: null
    },
    error: {
        message: ''
    }
})

app.constant('constService', {
    url: "https://jsonplaceholder.typicode.com/posts"
})

app.service('httpService', function ($http, postsService, constService) {
    this.getPosts = () => $http.get(constService.url).then((resp) => {
        // happens in the future - when the responsee will come back!

        console.log(resp.data)

        postsService.data.posts = resp.data
        postsService.error.message = ''

    }, (err) => {
        console.log(`ERROR === ${err}`)
        postsService.error.message = err
        postsService.data.posts = []
    }
    )

    this.getPost = (id) => $http.get(constService.url + '/' + id).then((resp) => {
        // happens in the future - when the responsee will come back!

        console.log(resp.data)

        postsService.data.post = resp.data
        postsService.error.message = ''


    }, (err) => {
        console.log(`ERROR === ${err}`)
        postsService.data.post = null
        postsService.error.message = err
    }
    )
})