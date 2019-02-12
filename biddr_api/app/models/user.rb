class User < ApplicationRecord
    has_many :auctions, dependent: :destroy
    has_many :bids, dependent: :destroy

    has_secure_password 

    validates :email, presence: true,
                      uniqueness: true,
                      format: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i

    
end
