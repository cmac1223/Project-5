require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Project5
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # in config/application.rb
    config.action_dispatch.default_headers = {
       'Access-Control-Allow-Origin' => 'http://my-web-service-consumer-site.com',
       'Access-Control-Request-Method' => %w{GET POST OPTIONS}.join(",")
    }

  end

end
