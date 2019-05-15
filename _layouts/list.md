---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<section class="tp-section tp-section">
	<div class="container mt9">
		<div class="row">
			<div class="col-md-3">
				<div class="tp-section-header">
					<h2 class="tp-section-header__title">BLOG</h2>
					<h2 class="tp-section-header__title-ja is-ja">ブログ</h2>
				</div>
			</div>
			<div class="col-md-9">

      {% for post in paginator.posts %}
        <div class="blogList clearfix">
					<p class="blogList__ph"><a href="{{ post.url }}">
            {% if post.catch %}
              <img src="/images/articles/{{ post.catch }}" alt="{{ post.title }}" /></a>
            {% else %}
              <img src="/assets/images/noimage.png" alt="{{ post.title }}" /></a>
            {% endif %}
          </p>
					<div class="blogList__detail clearfix">
						<h3 class="blogList__detail__title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
						<ul class="blogList__detail__meta">
							<li class="blogList__detail__date">{{ page.date | date: '%Y/%m/%d' }}</li>
              {% for category in post.categories %}
                <li class="blogList__detail__cat"><a href="/categories/{{ category | cgi_escape}}/">{{ category }}</a></li>
              {% endfor %}
						</ul>

						<p class="blogList__detail__description">
              {{ post.excerpt }}
            </p>
					</div>
				</div><!--//.blogList-->
      {% endfor %}
			</div> <!-- / .col  -->
		</div> <!-- / .row  -->
	</div><!-- /.container -->
</section>

{% if paginator.total_pages > 1 %}
  <div class="tablenav">
    {% if paginator.next_page %}
  	 <a class="prev page-numbers" href="{{ paginator.next_page_path | prepend: site.baseurl }}">
      <span class="is-ja">前へ</span>
    </a>
    {% endif %}
    {% if paginator.previous_page %}
      <a class="next page-numbers" href="{{ paginator.previous_page_path | prepend: site.baseurl }}">
        <span class="is-ja">次へ</span>
      </a>
    {% endif %}
  </div>
{% endif %}
