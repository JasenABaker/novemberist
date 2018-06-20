class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :content
      t.references :user, foreign_key: true
      t.references :wip, foreign_key: true
      t.references :short, foreign_key: true
      t.references :blog, foreign_key: true

      t.timestamps
    end
  end
end
