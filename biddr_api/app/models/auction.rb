class Auction < ApplicationRecord
    belongs_to :user
    has_many :bids, dependent: :destroy

    validates(
      :title,
      presence: {
        message: "title must exist"
      }
    )

    validates(
      :description,
      presence: {
        message: "description must exist"
      },
      length: { minimum: 10 }
    )

    validates(
      :ends_at,
      presence: {
        message: "must exist"
      }
    )

    validate(:check_ends_at)

    private 
    def check_ends_at
        if self.ends_at <= self.created_at
            self.errors.add(:ends_at, "Ends at date must be after Created at date")
        end
    end
end
