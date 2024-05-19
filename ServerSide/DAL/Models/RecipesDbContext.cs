using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace DAL.Models;

public partial class RecipesDbContext : DbContext
{
    public RecipesDbContext()
    {
    }

    public RecipesDbContext(DbContextOptions<RecipesDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<CommentsToRecipe> CommentsToRecipes { get; set; }

    public virtual DbSet<Ingredient> Ingredients { get; set; }

    public virtual DbSet<IngredientsToRecipe> IngredientsToRecipes { get; set; }

    public virtual DbSet<Level> Levels { get; set; }

    public virtual DbSet<Recipe> Recipes { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=DESKTOP-L9S4R74;Database=RecipesDB;TrustServerCertificate=True;Trusted_Connection=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Categori__3214EC07D464AEC4");

            entity.Property(e => e.Name).HasMaxLength(50);
        });

        modelBuilder.Entity<CommentsToRecipe>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Comments__3214EC0706E07883");

            entity.ToTable("CommentsToRecipe");

            entity.Property(e => e.Comment).HasMaxLength(100);

            entity.HasOne(d => d.Recipe).WithMany(p => p.CommentsToRecipes)
                .HasForeignKey(d => d.RecipeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__CommentsT__Recip__34C8D9D1");

            entity.HasOne(d => d.User).WithMany(p => p.CommentsToRecipes)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__CommentsT__UserI__35BCFE0A");
        });

        modelBuilder.Entity<Ingredient>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Ingredie__3214EC0797F0200A");

            entity.Property(e => e.Name).HasMaxLength(20);
        });

        modelBuilder.Entity<IngredientsToRecipe>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Ingredie__3214EC073E313C9E");

            entity.ToTable("IngredientsToRecipe");

            entity.Property(e => e.Amount).HasMaxLength(50);

            entity.HasOne(d => d.Ingredient).WithMany(p => p.IngredientsToRecipes)
                .HasForeignKey(d => d.IngredientId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Ingredien__Ingre__31EC6D26");

            entity.HasOne(d => d.Recipe).WithMany(p => p.IngredientsToRecipes)
                .HasForeignKey(d => d.RecipeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Ingredien__Recip__30F848ED");
        });

        modelBuilder.Entity<Level>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Levels__3214EC07A54487FA");

            entity.Property(e => e.Name).HasMaxLength(50);
        });

        modelBuilder.Entity<Recipe>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Recipes__3214EC079F887A0E");

            entity.Property(e => e.Instructions).HasMaxLength(1000);
            entity.Property(e => e.Name).HasMaxLength(50);
            entity.Property(e => e.Note).HasMaxLength(100);
            entity.Property(e => e.Pic).HasMaxLength(50);
            entity.Property(e => e.PreparationTime).HasMaxLength(50);

            entity.HasOne(d => d.Category).WithMany(p => p.Recipes)
                .HasForeignKey(d => d.CategoryId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Recipes__Categor__2B3F6F97");

            entity.HasOne(d => d.Level).WithMany(p => p.Recipes)
                .HasForeignKey(d => d.LevelId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Recipes__LevelId__2C3393D0");

            entity.HasOne(d => d.User).WithMany(p => p.Recipes)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Recipes__UserId__2A4B4B5E");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Users__3214EC0795A90B37");

            entity.Property(e => e.Email).HasMaxLength(50);
            entity.Property(e => e.FirstName).HasMaxLength(50);
            entity.Property(e => e.LastName).HasMaxLength(50);
            entity.Property(e => e.Password).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
