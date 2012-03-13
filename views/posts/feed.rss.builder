xml.instruct! :xml, :version => "1.0" 
xml.rss :version => "2.0" do
	xml.channel do
		xml.title "Needs a title."
		xml.description "Needs a description."
		xml.link blog_url(:rss)
		
		@posts.each do |post|
			xml.item do
				xml.title post.title
				xml.description post.body
				xml.pubDate post.created_at.to_s(:rfc822)
				xml.link blog_url(post)
				xml.guid blog_url(post)
			end
		end
	end
end