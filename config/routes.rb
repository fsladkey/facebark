Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:index, :create, :show, :update]
    resources :profiles, only: [:update]
    resources :photos, only: [:create, :delete]
  end
end
