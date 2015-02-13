(function ($) {
 
    var articles = [
        {
            title: "Article Title Goes Here",
            rank: "1",
            url: "#",
            img: "http://placehold.it/165x125"
        },
        {
            title: "Article Title Goes Here",
            rank: "2",
            url: "#",
            img: "http://placehold.it/165x125"
        },
        {
            title: "Article Title Goes Here",
            rank: "3",
            url: "#",
            img: "http://placehold.it/165x125"
        },
        {
            title: "Article Title Goes Here",
            rank: "4",
            url: "#",
            img: "http://placehold.it/165x125"
        },
        {
            title: "Article Title Goes Here",
            rank: "5",
            url: "#"
        },
    ];

    // Define Models

    var Article = Backbone.Model.extend({
        defaults: {
            img: "http://placehold.it/165x125&text=Placeholder"
        }
    });

    // Define Collections

    var HotNowArticles = Backbone.Collection.extend({
        model: Article
    });

    // Define Views 

    var ArticleView = Backbone.View.extend({
        tagName: "article",
        className: "hot-now-article",
        template: $("#articleTemplate").html(),
     
        render: function () {
            var tmpl = _.template(this.template);
     
            this.$el.html(tmpl(this.model.toJSON()));
            return this;
        }
    });

    var HotNowArticlesView = Backbone.View.extend({
        el: $("#article-container"),
     
        initialize: function () {
            this.collection = new HotNowArticles(articles);
            this.render();
        },
     
        render: function () {
            var that = this;
            _.each(this.collection.models, function (item) {
                that.renderContact(item);
            }, this);
        },
     
        renderContact: function (item) {
            var articleView = new ArticleView({
                model: item
            });
            this.$el.append(articleView.render().el);
        }
    });

    var HotNowArticles = new HotNowArticlesView();
 
} (jQuery));