Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do

    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:index, :create, :show, :update]
    resources :profiles, only: [:update]
    resources :photos, only: [:create, :delete]
    resources :albums, only: [:create, :show]
    resources :friendships, only: [:destroy]
    resources :friend_requests, only: [:create, :update, :destroy]
    resources :feed, only: [:index]

    resources :posts, only: [:create, :index] do
      member do
        post "lick"
        delete "unlick"
      end
    end


    resources :comments, only: [:create, :update, :destroy] do
      member do
        post "lick"
        delete "unlick"
      end
    end

  end
end
