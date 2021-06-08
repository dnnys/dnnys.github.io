require "exifr"
# EXIFR::JPEG.new(photo.path).date_time.to_s

module Jekyll
  module PhotoFilter
    def photo_filter(files)
      photos = files.select {|photo| photo.relative_path.include?("original") }
      photos.sort_by{ |photo| File.mtime(photo.path)} # .reverse
    end
  end
end
Liquid::Template.register_filter(Jekyll::PhotoFilter)

