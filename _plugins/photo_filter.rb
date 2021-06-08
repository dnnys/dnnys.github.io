require "exifr"
# EXIFR::JPEG.new(photo.path).date_time.to_s

module Jekyll
  module PhotoFilter
    def photo_filter(files)
      photos = files.select {|photo| photo.relative_path.include?("original") }
      photos.sort_by do |photo|
            File.new(photo.path).mtime.to_s
      end.reverse
    end
  end
end
Liquid::Template.register_filter(Jekyll::PhotoFilter)

