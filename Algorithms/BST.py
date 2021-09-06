class Node: 
  def __init__(self, data):
    self.left = None
    self.right = None
    self.data = data
  def insert(self, data):
    if self.data:
      if data > self.data:
        if not self.right:
          self.right = Node(data)
        else: 
          self.right.insert(data)
      elif data < self.data:
        if not self.left:
          self.left = Node(data)
        else:
          self.left.insert(data)
      else:
        self.data = data
  def PrintTree(self):
    if self.left:
      self.left.PrintTree()
    print(self.data)
    if self.right:
      self.right.PrintTree()

root = Node(16)
data = [31, 18, 68, 35, 61, 83, 97, 84, 20, 11, 53, 90, 98, 49, 10, 52, 59, 87, 80, 74]
for i in data:
  root.insert(i)
root.PrintTree()
