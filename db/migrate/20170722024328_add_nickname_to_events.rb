class AddNicknameToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :nickname, :string
  end
end
