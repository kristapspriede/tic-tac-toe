import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  it(" X should be able to make move blank", () => {
    const game = new Game();

    game.onClick(0)
    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);


  });
  it(" O should be able to make move after X", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(1)
    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);


  });
  it(" shouldn't be able to click in one cell", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(0)
    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);


  });
  it(" shouldn win when first row filled with X", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(3)
    game.onClick(1)
    game.onClick(4)
    game.onClick(2)
    expect(game.getCells()).toEqual([
      "X", "X", "X",
      "O", "O", "-",
      "-", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);


  });
  it(" shouldn win when first row filled with O", () => {
    const game = new Game();
  
    game.onClick(3)
    game.onClick(0)
    game.onClick(4)
    game.onClick(1)
    game.onClick(8)
    game.onClick(2)
    expect(game.getCells()).toEqual([
      "O", "O", "O",
      "X", "X", "-",
      "-", "-", "X"
    ]);
    
    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);
  
  
  });
  it(" shouldn win when last row filled with X", () => {
    const game = new Game();
  
    game.onClick(6)
    game.onClick(3)
    game.onClick(7)
    game.onClick(4)
    game.onClick(8)
    
    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "O", "O", "-",
      "X", "X", "X"
    ]);
    
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  
  
  });
  it(" shouldn be able to restart game", () => {
    const game = new Game();
  
    game.onClick(6)
    game.onClick(3)
    game.onClick(7)
    game.onClick(4)
    game.onClick(8)
    
    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "O", "O", "-",
      "X", "X", "X"
    ]);
    
    game.restart()
    
    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
  
  
  });
  it(" should win when last row filled with O", () => {
    const game = new Game();
  
    game.onClick(1)
    game.onClick(6)
    game.onClick(4)
    game.onClick(7)
    game.onClick(3)
    game.onClick(8)
    expect(game.getCells()).toEqual([
      "-", "X", "-",
      "X", "X", "-",
      "O", "O", "O"
    ]);
    
    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);
  });
  it(" should win when second row filled with O", () => {
    const game = new Game();
  
    game.onClick(1)
    game.onClick(3)
    game.onClick(0)
    game.onClick(4)
    game.onClick(6)
    game.onClick(5)
    expect(game.getCells()).toEqual([
      "X", "X", "-",
      "O", "O", "O",
      "X", "-", "-"
    ]);
    
    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);
  
  
  });
  it(" should win when second row filled with X", () => {
    const game = new Game();
  
    game.onClick(3)
    game.onClick(0)
    game.onClick(4)
    game.onClick(1)
    game.onClick(5)
    
    expect(game.getCells()).toEqual([
      "O", "O", "-",
      "X", "X", "X",
      "-", "-", "-"
    ]);
    
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  
  
  });
  it(" should win when first column filled with O", () => {
    const game = new Game();
  
    game.onClick(1)
    game.onClick(0)
    game.onClick(4)
    game.onClick(3)
    game.onClick(5)
    game.onClick(6)
    expect(game.getCells()).toEqual([
      "O", "X", "-",
      "O", "X", "X",
      "O", "-", "-"
    ]);
    
    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);
  
  
  });
  it(" should win when first column filled with X", () => {
    const game = new Game();
  
    game.onClick(0)
    game.onClick(1)
    game.onClick(3)
    game.onClick(4)
    game.onClick(6)
    
    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "X", "O", "-",
      "X", "-", "-"
    ]);
    
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  
  
  });
  it(" should win when second column filled with O", () => {
    const game = new Game();
  
    game.onClick(0)
    game.onClick(1)
    game.onClick(3)
    game.onClick(4)
    game.onClick(5)
    game.onClick(7)
    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "X", "O", "X",
      "-", "O", "-"
    ]);
    
    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);
  
  
  });
  it(" should win when first column filled with X", () => {
    const game = new Game();
  
    game.onClick(1)
    game.onClick(0)
    game.onClick(4)
    game.onClick(3)
    game.onClick(7)
    
    expect(game.getCells()).toEqual([
      "O", "X", "-",
      "O", "X", "-",
      "-", "X", "-"
    ]);
    
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  
  
  });
  it(" should win when last column filled with O", () => {
    const game = new Game();
  
    game.onClick(1)
    game.onClick(2)
    game.onClick(4)
    game.onClick(5)
    game.onClick(3)
    game.onClick(8)
    expect(game.getCells()).toEqual([
      "-", "X", "O",
      "X", "X", "O",
      "-", "-", "O"
    ]);
    
    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);
  
  
  });
  it(" should win when first column filled with X", () => {
    const game = new Game();
  
    game.onClick(2)
    game.onClick(1)
    game.onClick(5)
    game.onClick(4)
    game.onClick(8)
    
    expect(game.getCells()).toEqual([
      "-", "O", "X",
      "-", "O", "X",
      "-", "-", "X"
    ]);
    
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  
  
  });
  it(" should win when first diagonal filled with O", () => {
    const game = new Game();
  
    game.onClick(1)
    game.onClick(0)
    game.onClick(2)
    game.onClick(4)
    game.onClick(3)
    game.onClick(8)
    expect(game.getCells()).toEqual([
      "O", "X", "X",
      "X", "O", "-",
      "-", "-", "O"
    ]);
    
    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);
  
  
  });
  it(" should win when first diagonal filled with X", () => {
    const game = new Game();
  
    game.onClick(0)
    game.onClick(1)
    game.onClick(4)
    game.onClick(3)
    game.onClick(8)
    
    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "O", "X", "-",
      "-", "-", "X"
    ]);
    
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  
  
  });
  it(" should win when second diagonal filled with O", () => {
    const game = new Game();
  
    game.onClick(1)
    game.onClick(2)
    game.onClick(3)
    game.onClick(4)
    game.onClick(8)
    game.onClick(6)
    expect(game.getCells()).toEqual([
      "-", "X", "O",
      "X", "O", "-",
      "O", "-", "X"
    ]);
    
    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);
  
  
  });
  it(" should win when first diagonal filled with X", () => {
    const game = new Game();
  
    game.onClick(2)
    game.onClick(1)
    game.onClick(4)
    game.onClick(3)
    game.onClick(6)
    
    expect(game.getCells()).toEqual([
      "-", "O", "X",
      "O", "X", "-",
      "X", "-", "-"
    ]);
    
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  
  
  });
  it(" should be tie", () => {
    const game = new Game();
  
    game.onClick(1)
    game.onClick(0)
    game.onClick(2)
    game.onClick(4)
    game.onClick(3)
    game.onClick(5)
    game.onClick(6)
    game.onClick(7)
    game.onClick(8)
    
    expect(game.getCells()).toEqual([
      "O", "X", "X",
      "X", "O", "O",
      "X", "O", "X"
    ]);
    
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(true);
  
  
  });
});
