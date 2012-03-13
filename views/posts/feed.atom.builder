atom_feed do |feed|
	feed.title('Needs a title.')
	feed.updated(@updated)

	@posts.each do |post|
		feed.entry( post, :url => blog_path(post) ) do |entry|
			entry.title(post.title)
			entry.content(post.body, :type => 'html')
			entry.author { |author| author.name(post.user.first_name+" "+post.user.last_name)}
		end
	end
end