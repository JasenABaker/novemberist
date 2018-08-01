class Api::Users::RegistrationsController < Devise::RegistrationsController

    def create
        @user = User.create!(sign_up_params)
        
        render json: @user
    end

    def update
        @user = User.find(params[:id])
        @user.update!(account_update_params)
        render json: @user
    end
    def sign_up_params
        params.require(:user).permit(:name, :nickname, :email, :password, :password_confirmation, :image)
    end
      def account_update_params
        params.fetch(:user, {}).permit(:name, :nickname, :email, :password, :password_confirmation, :image, :current_password)
      end
      private :sign_up_params
      private :account_update_params
  end