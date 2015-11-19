Rails.application.routes.draw do
  get 'posts/index'

  get 'albums/show'

  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:index, :create, :show, :update]
    resources :profiles, only: [:update]
    resources :photos, only: [:create, :delete]
    resources :albums, only: [:create, :show]
    resources :posts, only: [:create, :index]
  end
end
