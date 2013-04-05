# Require any additional compass plugins here.

# Change this to :production when ready to deploy the CSS to the live server.
environment = :development
#environment = :production

# Location of the theme's resources.

# Set this to the root of your project when deployed:
# http_path = "/"

css_dir = "css"
sass_dir = "scss"
images_dir = "img"
javascripts_dir = "js"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = (environment == :development) ? :expanded : :compressed

# To enable relative paths to assets via compass helper functions.
relative_assets = true

# Turn off comments that display the original location of your selectors.
# line_comments = false
