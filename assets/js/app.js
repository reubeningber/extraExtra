(function ($) {
 
    // Define Content 

    var articles = [
        {
            title: "Hospital Worker Who Handled Ebola Samples Is on Cruise Ship",
            rank: "1",
            url: "#",
            img: "http://placehold.it/165x125"
        },
        {
            title: "Why Dr. Kent Brantly Couldn't Donate Blood to Thomas Eric...",
            rank: "2",
            url: "#",
            img: "http://placehold.it/165x125"
        },
        {
            title: "Joan Rivers' Cause of Death Revealed",
            rank: "3",
            url: "#",
            img: "http://placehold.it/165x125"
        },
        {
            title: "Ebola Nurse Goes From Good to Fair After Trip to NIH",
            rank: "4",
            url: "#",
            img: "http://placehold.it/165x125"
        },
        {
            title: "Nurse With Ebola Appears on Camera for 1st Time",
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
                that.renderArticle(item);
            }, this);
        },
     
        renderArticle: function (item) {
            var articleView = new ArticleView({
                model: item
            });
            this.$el.append(articleView.render().el);
        }
    });

    var HotNowArticles = new HotNowArticlesView();
 
} (jQuery));