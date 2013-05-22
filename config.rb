# Require any additional compass plugins here.

# Change this to :production when ready to deploy the CSS to the live server.
#environment = :development
environment = :production

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "sass"
images_dir = "img"
javascripts_dir = "js"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = (environment == :development) ? :expanded : :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = true/false
line_comments = (environment == :development)

# Debug info
sass_options = (environment == :development) ? { :debug_info => true } : {}
# Then in Chrome...
#   1. go to chrome://flags
#   2. Enable Developer Tools experiments.
#   3. Inspect element -> Settings -> Experiments -> Support for Sass
#   4. Settings -> General -> Enable Source Maps

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass