import React, { memo } from 'react';
import { Building2, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LOGO_MAX_SIZE = 2 * 1024 * 1024; // 2MB

const CompanyForm = memo(({ formData, onInputChange, toast }) => {
  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > LOGO_MAX_SIZE) {
        toast({
          title: "Arquivo muito grande",
          description: "O logo deve ter no máximo 2MB.",
          variant: "destructive"
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        onInputChange('companyLogo', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          Dados da Empresa
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="companyName">Nome da Empresa *</Label>
            <Input
              id="companyName"
              value={formData.companyName}
              onChange={(e) => onInputChange('companyName', e.target.value)}
              placeholder="Ex: Minha Empresa MEI"
              required
            />
          </div>
          <div>
            <Label htmlFor="companyDocument">CNPJ</Label>
            <Input
              id="companyDocument"
              value={formData.companyDocument}
              onChange={(e) => onInputChange('companyDocument', e.target.value)}
              placeholder="00.000.000/0000-00"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="companyPhone">Telefone</Label>
            <Input
              id="companyPhone"
              value={formData.companyPhone}
              onChange={(e) => onInputChange('companyPhone', e.target.value)}
              placeholder="(11) 99999-9999"
            />
          </div>
          <div>
            <Label htmlFor="companyEmail">E-mail</Label>
            <Input
              id="companyEmail"
              type="email"
              value={formData.companyEmail}
              onChange={(e) => onInputChange('companyEmail', e.target.value)}
              placeholder="contato@empresa.com"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="companyAddress">Endereço</Label>
          <Textarea
            id="companyAddress"
            value={formData.companyAddress}
            onChange={(e) => onInputChange('companyAddress', e.target.value)}
            placeholder="Rua, número, bairro, cidade - CEP"
            rows={2}
          />
        </div>

        <div>
          <Label htmlFor="companyLogo">Logo da Empresa</Label>
          <div className="flex items-center gap-4 mt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => document.getElementById('logoInput').click()}
              className="flex items-center gap-2"
            >
              <Upload className="h-4 w-4" />
              Selecionar Logo
            </Button>
            <input
              id="logoInput"
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="hidden"
            />
            {formData.companyLogo && (
              <div className="text-sm text-green-600">
                ✓ Logo carregada
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Máximo 2MB - JPG, PNG ou GIF
          </p>
        </div>
      </CardContent>
    </Card>
  );
});

CompanyForm.displayName = 'CompanyForm';

export default CompanyForm;