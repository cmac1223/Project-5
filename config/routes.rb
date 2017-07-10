Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  get 'welcome/index'
  root "welcome#index"

  devise_for :users
  resources :users

  
end
