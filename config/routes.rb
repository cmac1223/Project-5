Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  get 'welcome/index'
  root "welcome#index"

  resources :users

  # namespace :api do
  # end

  
  # mount_devise_token_auth_for 'User', at: 'api/auth'
  
end
